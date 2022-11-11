export function dateFormater(date: string) {
  const currentDate = new Date().getTime();
  const applicationDate = new Date(date);
  const timeDiff = Math.floor(
    (Number(currentDate) - Number(applicationDate.getTime())) / 24
  );
  switch (timeDiff) {
    case 0:
      return "Posted today";
    case 1:
      return "Posted 1 day ago";
    case 2:
      return "Posted 2 days ago";
    default:
      return applicationDate.toDateString().slice(3);
  }
}
