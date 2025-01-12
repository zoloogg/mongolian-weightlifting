export const transformQuery = (query: any) => {
  query.isDeleted = { $ne: true }
  return query
}
