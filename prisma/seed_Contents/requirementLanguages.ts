import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const requirementLanguages  = async () => {
    const requirementLanguages1 = await prisma.requirementLanguages.create( {
		
        data : {
            id: 1, 
            postId: 6, 
            languageId: 21,
        }
        })

}