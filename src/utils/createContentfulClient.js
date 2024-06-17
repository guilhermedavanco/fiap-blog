import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
    space: 'kysox51em892',/*import.meta.env.VITE_SPACE_ID,*/
    accessToken: 'SaKA_emtebI1G7nPI9WF4V5aoxaC2Hz00FheT3pApr8',/*import.meta.env.VITE_ACCESS_TOKEN,*/
});