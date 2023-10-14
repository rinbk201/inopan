import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const user  = async () => {
    // sample_user1
    await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
    })

    // sample_user2
    await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user3
    await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user4
    await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user5
    await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user6
    await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user7 
    await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})
    
    // sample_user8 
    await prisma.user.create({
		data: {
			email: 'XXecXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

    // sample_user9 
    await prisma.user.create({
		data: {
			email: 'XXfiXXX@ms.dendai.ac.jp',
			password: 'test',
		}
    })

    // sample_user10
    await prisma.user.create({
		data: {
			email: 'XXajXXX@ms.dendai.ac.jp',
			password: 'test',
		}
	})

}

