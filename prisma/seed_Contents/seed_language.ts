import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const language  = async () => {
    const sample_Language1 = await prisma.language.create({
		data: {
			id: 1 ,
			languageName: "ActionScript" ,
			area: ""
		}
	})

	const sample_Language2 = await prisma.language.create({
		data: {
			id: 2 ,
			languageName: "ASPNET" ,
			area: ""
		}
	})

	const sample_Language3 = await prisma.language.create({
		data: {
			id: 3 ,
			languageName: "Csharp" ,
			area: ""
		}
	})

	const sample_Language4 = await prisma.language.create({
		data: {
			id: 4 ,
			languageName: "CakePHP" ,
			area: ""
		}
	})

	const sample_Language5 = await prisma.language.create({
		data: {
			id: 5 ,
			languageName: "COBOL" ,
			area: ""
		}
	})

	const sample_Language6 = await prisma.language.create({
		data: {
			id: 6 ,
			languageName: "CSS" ,
			area: ""
		}
	})

	const sample_Language7 = await prisma.language.create({
		data: {
			id: 7 ,
			languageName: "C_Cpp" ,
			area: ""
		}
	})

	const sample_Language8 = await prisma.language.create({
		data: {
			id: 8 ,
			languageName: "Delphi" ,
			area: ""
		}
	})

	const sample_Language9 = await prisma.language.create({
		data: {
			id: 9 ,
			languageName: "Django" ,
			area: ""
		}
	})

	const sample_Language10 = await prisma.language.create({
		data: {
			id: 10 ,
			languageName: "Facebook_Application" ,
			area: ""
		}
	})

	const sample_Language11 = await prisma.language.create({
		data: {
			id: 11 ,
			languageName: "Fortran" ,
			area: ""
		}
	})

	const sample_Language12 = await prisma.language.create({
		data: {
			id: 12 ,
			languageName: "HTML" ,
			area: ""
		}
	})

	const sample_Language13 = await prisma.language.create({
		data: {
			id: 13 ,
			languageName: "RubyonRails" ,
			area: ""
		}
	})

	const sample_Language14 = await prisma.language.create({
		data: {
			id: 14 ,
			languageName: "Java" ,
			area: ""
		}
	})

	const sample_Language15 = await prisma.language.create({
		data: {
			id: 15 ,
			languageName: "jQuery" ,
			area: ""
		}
	})

	const sample_Language16 = await prisma.language.create({
		data: {
			id: 16 ,
			languageName: "JavaScript" ,
			area: ""
		}
	})

	const sample_Language17 = await prisma.language.create({
		data: {
			id: 17 ,
			languageName: "Kotlin" ,
			area: ""
		}
	})

	const sample_Language18 = await prisma.language.create({
		data: {
			id: 18 ,
			languageName: "Laravel" ,
			area: ""
		}
	})

	const sample_Language19 = await prisma.language.create({
		data: {
			id: 19 ,
			languageName: "MATLAB" ,
			area: ""
		}
	})

	const sample_Language20 = await prisma.language.create({
		data: {
			id: 20 ,
			languageName: "MySQL" ,
			area: ""
		}
	})

	const sample_Language21 = await prisma.language.create({
		data: {
			id: 21 ,
			languageName: "Nodejs" ,
			area: ""
		}
	})

	const sample_Language22 = await prisma.language.create({
		data: {
			id: 22 ,
			languageName: "ObjectiveC" ,
			area: ""
		}
	})

	const sample_Language23 = await prisma.language.create({
		data: {
			id: 23 ,
			languageName: "OpenCV" ,
			area: ""
		}
	})

	const sample_Language24 = await prisma.language.create({
		data: {
			id: 24 ,
			languageName: "OpenGL" ,
			area: ""
		}
	})

	const sample_Language25 = await prisma.language.create({
		data: {
			id: 25 ,
			languageName: "Oracle" ,
			area: ""
		}
	})

	const sample_Language26 = await prisma.language.create({
		data: {
			id: 26 ,
			languageName: "Pascal" ,
			area: ""
		}
	})

	const sample_Language27 = await prisma.language.create({
		data: {
			id: 27 ,
			languageName: "Perl" ,
			area: ""
		}
	})

	const sample_Language28 = await prisma.language.create({
		data: {
			id: 28 ,
			languageName: "PHP" ,
			area: ""
		}
	})

	const sample_Language29 = await prisma.language.create({
		data: {
			id: 29 ,
			languageName: "Python" ,
			area: ""
		}
	})

	const sample_Language30 = await prisma.language.create({
		data: {
			id: 30 ,
			languageName: "Ruby" ,
			area: ""
		}
	})

	const sample_Language31 = await prisma.language.create({
		data: {
			id: 31 ,
			languageName: "Go" ,
			area: ""
		}
	})

	const sample_Language32 = await prisma.language.create({
		data: {
			id: 32 ,
			languageName: "SQL" ,
			area: ""
		}
	})

	const sample_Language33 = await prisma.language.create({
		data: {
			id: 33 ,
			languageName: "PostgreSQL" ,
			area: ""
		}
	})

	const sample_Language34 = await prisma.language.create({
		data: {
			id: 34 ,
			languageName: "Unity" ,
			area: ""
		}
	})

	const sample_Language35 = await prisma.language.create({
		data: {
			id: 35 ,
			languageName: "VBnet" ,
			area: ""
		}
	})

	const sample_Language36 = await prisma.language.create({
		data: {
			id: 36 ,
			languageName: "Vuejs" ,
			area: ""
		}
	})

	const sample_Language37 = await prisma.language.create({
		data: {
			id: 37 ,
			languageName: "R" ,
			area: ""
		}
	})

	const sample_Language38 = await prisma.language.create({
		data: {
			id: 38 ,
			languageName: "React" ,
			area: ""
		}
	})

	const sample_Language39 = await prisma.language.create({
		data: {
			id: 39 ,
			languageName: "Scala" ,
			area: ""
		}
	})

	const sample_Language40 = await prisma.language.create({
		data: {
			id: 40 ,
			languageName: "Swift" ,
			area: ""
		}
	})

	const sample_Language41 = await prisma.language.create({
		data: {
			id: 41 ,
			languageName: "AdobeXd" ,
			area: ""
		}
	})

	const sample_Language42 = await prisma.language.create({
		data: {
			id: 42 ,
			languageName: "Photoshop" ,
			area: ""
		}
	})

	const sample_Language43 = await prisma.language.create({
		data: {
			id: 43 ,
			languageName: "Illustrator" ,
			area: ""
		}
	})
}