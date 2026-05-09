const RedgifsDownloader = require("redgifs-downloader")
// Replace __dirname with your prefered starting directory of choice
// Gifs will be downloaded into their corresponding subdirectories
const downloader = RedgifsDownloader.create("research")
downloader.downloadQuery("hadnjob")
downloader.downloadQuery("cumshot")

const links = await RedgifsDownloader.getSearchLinks("cum", {minLikes: 3})
cosnole.log(links)
