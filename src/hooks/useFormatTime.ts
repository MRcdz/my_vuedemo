const useFormatTime = (time:Date) => {
  const d = time.getFullYear() + '-' + (time.getMonth() + 1).toString().padStart(2, '0') + '-' + time.getDate().toString().padStart(2, '0')
  const t = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0')
  const r = d + ' ' + t
  return r
}
export default useFormatTime
