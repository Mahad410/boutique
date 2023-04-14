import { createClient } from "next-sanity";
import  config  from "../sanityBotique/sanity.config";
import imageUrlBuilder from '@sanity/image-url'
export  const previewClient = createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    useCdn: false,
    apiVersion: "2021-10-21",
    token: process.env.SANITY_TOKEN,
})


const builder = imageUrlBuilder(previewClient)
export const urlFor= (source)=>{
    return builder.image(source)
}
