import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const programmingLanguages  = async () => {
    
    // User1
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            language: "Csharp",
            level: "LEVEL1"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            language: "HTML",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            language: "RubyonRails",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 1,
            language: "Java",
            level: "LEVEL3"
        }
    })

    // User2
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "JavaScript",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "Nodejs",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "React",
            level: "LEVEL2"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "Swift",
            level: "LEVEL2"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "AdobeXd",
            level: "LEVEL2"
        }
    })  
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 2,
            language: "Java",
            level: "LEVEL2"
        }
    }) 
    
    // User3
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "Java",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "MySQL",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "Unity",
            level: "LEVEL3"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "Swift",
            level: "LEVEL4"
        }
    })
    
        // User3
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "Java",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "MySQL",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "MySQL",
            level: "LEVEL3"
        }
    })
    
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 3,
            language: "Swift",
            level: "LEVEL4"
        }
    })  

    // User4
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            language: "Java",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            language: "C_Cpp",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            language: "Nodejs" ,
            level: "LEVEL1"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 4,
            language: "OpenCV",
            level: "LEVEL1"
        }
    })

    // User5
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            language: "Java",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            language: "C_Cpp",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            language: "Python" ,
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            language: "SQL",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 5,
            language: "Nodejs" ,
            level: "LEVEL1"
        }
    })

    // User6
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            language: "C_Cpp",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            language: "Ruby",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 6,
            language: "MySQL",
            level: "LEVEL5"
        }
    })

    // User7
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            language: "C_Cpp",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            language: "OpenCV",
            level: "LEVEL4"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            language: "Python" ,
            level: "LEVEL4"
        }
    })
   
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 7,
            language: "MATLAB",
            level: "LEVEL2"
        }
    })

    // User8
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 8,
            language: "C_Cpp",
            level: "LEVEL2"
        }
    })

    // User9
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            language: "C_Cpp",
            level: "LEVEL3"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            language: "PostgreSQL",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            language: "R",
            level: "LEVEL2"
        }
    })

    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 9,
            language: "Python" ,
            level: "LEVEL1"
        }
    })

    // User10
    await prisma.programmingLanguages.create({
        data:{
            userInfoId: 10,
            language: "Java",
            level: "LEVEL5"
        }
    })
    


}