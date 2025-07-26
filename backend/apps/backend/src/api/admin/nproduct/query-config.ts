export const adminNProductRuleFields = [
  'id'
]

export const adminNProductRuleQueryConfig = {
  list: {
    defaults: adminNProductRuleFields,
    isList: true
  },
  retrieve: {
    defaults: adminNProductRuleFields,
    isList: false
  }
}

export const adminNProductQueryConfig = {
  list: {
    defaults: [],
    isList: true
  },
  retrieve: {
    defaults: [],
    isList: false
  }
}