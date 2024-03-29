const {
  ipcOnEventSync,
  ipcOnEventAsync
} = require('@canwdev/electron-utils/ipc/ipc-helper-main')
const {
  KdbxInstance
} = require('./index')
const util = require('util')
const apiPrefix = 'ipcKdbx_'

const kInstance = new KdbxInstance()

const openDatabase = async (options) => {
  await kInstance.open(options)
  return true
}

const closeDatabase = async () => {
  await kInstance.close()
  return true
}

const saveDatabase = async () => {
  await kInstance.save()
  return true
}


const checkIsOpen = () => {
  return !!kInstance.db
}

const getIsChanged = () => {
  return !!kInstance.isChanged
}

const getMeta = () => {
  const meta = (kInstance.db && kInstance.db.meta) || {}
  return {
    // header: kInstance.db.header,
    meta: {
      recycleBinEnabled: meta.recycleBinEnabled,
      recycleBinUuid: meta.recycleBinUuid
    }
  }
}

const getGroupTree = async (groupUuid) => {
  return kInstance.getGroupTree(groupUuid)
}

const getGroupEntries = async (groupUuid) => {
  return kInstance.getGroupEntries(groupUuid)
}

const getEntryDetail = async (uuid) => {
  return kInstance.getEntryDetail(uuid)
}

const updateEntry = async (params) => {
  return kInstance.updateEntry(params)
}

const updateGroup = async (params) => {
  return kInstance.updateGroup(params)
}

const createEntry = async (params) => {
  return kInstance.createEntry(params)
}

const createGroup = async (params) => {
  return kInstance.createGroup(params)
}

const removeGroup = async (params) => {
  const {groupUuid} = params || {}
  const group = kInstance.db.getGroup(groupUuid)
  return kInstance.removeItems(group)
}

const removeEntry = async (params) => {
  const {uuid} = params || {}
  const entry = kInstance.getEntry(uuid)
  kInstance.removeItems(entry)
}

const moveGroup = async (params) => {
  const {uuid, targetUuid} = params || {}
  const group = kInstance.db.getGroup(uuid)
  return kInstance.moveItems({
    groupUuid: targetUuid,
    items: group
  })
}

const moveEntry = async (params) => {
  const {uuid, groupUuid} = params || {}
  const entry = kInstance.getEntry(uuid)

  return kInstance.moveItems({
    groupUuid,
    items: entry,
  })
}

const api = {
  openDatabase,
  closeDatabase,
  saveDatabase,
  checkIsOpen,
  getIsChanged,
  getMeta,
  getGroupTree,
  getGroupEntries,
  getEntryDetail,
  updateEntry,
  updateGroup,
  createEntry,
  createGroup,
  removeGroup,
  removeEntry,
  moveGroup,
  moveEntry,
}

const apiList = []
for (const key in api) {
  const fn = api[key]
  const eventName = apiPrefix + key
  const isAsync = util.types.isAsyncFunction(fn)
  if (isAsync) {
    ipcOnEventAsync(eventName, fn)
  } else {
    ipcOnEventSync(eventName, fn)
  }
  apiList.push({
    eventName,
    isAsync
  })
}

ipcOnEventSync('getAvailableApi', () => {
  return apiList
})

module.exports = {
  kInstance
}
