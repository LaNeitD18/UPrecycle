export function getPaginationResult<T>(data: T[], limit: number, page: number) {
  const startIndex = Math.min(page * limit, data.length);
  const endExclusiveIndex = Math.min(startIndex + limit, data.length)
  
  return {
    limit,
    page,
    data: data.slice(startIndex, endExclusiveIndex),
    total: data.length,
  }
}