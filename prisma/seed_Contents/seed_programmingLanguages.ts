import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const programmingLanguages  = async () => {
    
    // User1
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            languageId: 3,
            level: "LEVEL1"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            languageId: 12,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            languageId: 13,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            languageId: 14,
            level: "LEVEL3"
        }
    })

    // User2
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 16,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 21,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 38,
            level: "LEVEL2"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 40,
            level: "LEVEL2"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 41,
            level: "LEVEL2"
        }
    })  
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            languageId: 14,
            level: "LEVEL2"
        }
    }) 
    
    // User3
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 14,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 20,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 34,
            level: "LEVEL3"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 40,
            level: "LEVEL4"
        }
    })
    
        // User3
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 14,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 20,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 34,
            level: "LEVEL3"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            languageId: 40,
            level: "LEVEL4"
        }
    })  

    // User4
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            languageId: 14,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            languageId: 7,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            languageId: 21,
            level: "LEVEL1"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            languageId: 23,
            level: "LEVEL1"
        }
    })

    // User5
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            languageId: 14,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            languageId: 7,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            languageId: 29,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            languageId: 32,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            languageId: 21,
            level: "LEVEL1"
        }
    })

    // User6
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            languageId: 7,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            languageId: 30,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            languageId: 20,
            level: "LEVEL5"
        }
    })

    // User7
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            languageId: 7,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            languageId: 23,
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            languageId: 29,
            level: "LEVEL4"
        }
    })
   
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            languageId: 19,
            level: "LEVEL2"
        }
    })

    // User8
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 8,
            languageId: 7,
            level: "LEVEL2"
        }
    })

    // User9
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            languageId: 7,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            languageId: 33,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            languageId: 37,
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            languageId: 29,
            level: "LEVEL1"
        }
    })

    // User10
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 10,
            languageId: 14,
            level: "LEVEL5"
        }
    })
    


}