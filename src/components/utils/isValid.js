
export const isValid = (thumbnailFile, title, date)=> {
    return !(thumbnailFile === "" || title === "" || date === "");
}