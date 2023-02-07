function eventEmitter(type: string, detail: {}) {
  let event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail,
  })

  return document.dispatchEvent(event)
}

export function store(data = [{}], name = 'update-cart') {
  return new Proxy(data, {
    get: function (obj, prop: any) {
      return obj[prop]
    },

    set: function (obj, prop: any, value) {
      obj[prop] = value
      eventEmitter(name, data)
      return true
    },

    deleteProperty: function (obj, prop: any) {
      delete obj[prop]
      eventEmitter(name, data)
      return true
    },
  })
}
