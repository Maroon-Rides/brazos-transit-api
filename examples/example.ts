import { getAuthentication, getBaseData } from "../src/index";

getAuthentication().then(async (auth) => {
    console.log(await getBaseData(auth))
})
