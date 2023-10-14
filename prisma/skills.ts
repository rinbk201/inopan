import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const user  = async () => {
    await prisma.skills.create({
        data: {
        id: 1,
        userInfoId: 1,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL1",      
        BACKEND:"LEVEL3",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL1"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 2,
        userInfoId: 2,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL3",        
        FRONTEND:"LEVEL3",      
        BACKEND:"LEVEL1",       
        PRESENTATION:"LEVEL2",  
        OTHER:"LEVEL1"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 3,
        userInfoId: 3,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL1",      
        BACKEND:"LEVEL4",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL3"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 4,
        userInfoId: 4,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL2",      
        BACKEND:"LEVEL1",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL1"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 5,
        userInfoId: 5,
        PLANNING: "LEVEL3",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL2",      
        BACKEND:"LEVEL5",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL3"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 6,
        userInfoId: 6,
        PLANNING: "LEVEL3",
        DESIGN:"LEVEL2",        
        FRONTEND:"LEVEL1",      
        BACKEND:"LEVEL5",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL2"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 7,
        userInfoId: 7,
        PLANNING: "LEVEL3",
        DESIGN:"LEVEL2",        
        FRONTEND:"LEVEL1",      
        BACKEND:"LEVEL5",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL2"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 8,
        userInfoId: 8,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL2",      
        BACKEND:"LEVEL2",       
        PRESENTATION:"LEVEL3",  
        OTHER:"LEVEL1"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 9,
        userInfoId: 9,
        PLANNING: "LEVEL1",
        DESIGN:"LEVEL1",        
        FRONTEND:"LEVEL1",      
        BACKEND:"LEVEL4",       
        PRESENTATION:"LEVEL1",  
        OTHER:"LEVEL2"
        }   
    })

    await prisma.skills.create({
        data: {
        id: 10,
        userInfoId: 10,
        PLANNING: "LEVEL2",
        DESIGN:"LEVEL2",        
        FRONTEND:"LEVEL2",      
        BACKEND:"LEVEL2",       
        PRESENTATION:"LEVEL2",  
        OTHER:"LEVEL2"
        }   
    })

}