const useFormatTime = (time:Date) => {
  const d = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
  const t = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
  const r = d + ' ' + t
  return r
}
export default useFormatTime
