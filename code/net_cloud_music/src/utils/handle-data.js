export function handleCategoryData(categories, sub) {
  if (!Array.isArray(sub)) return []
  const newArr = []
  for (const key in categories) {
    newArr[key] = {
      title: categories[key],
      list: []
    }
  }

  for (const item of sub) {
    newArr[item.category].list.push(item)
  }

  return newArr
}