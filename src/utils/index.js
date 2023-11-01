export const basePath = "https://finnhub.io/api/v1";

export const convertUnixTimestampToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};
