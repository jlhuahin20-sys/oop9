enum CourseStatus {
    Open = "Open",
    Closed = "Closed",
    Full = "Full"
}
interface Student {
    id: number;
    name: string;
}
interface Course {
    title: string;
    code: string;
    status: CourseStatus;
    students: Student[];
}
function enroll(student: Student, course: Course): void {
    if (course.status === CourseStatus.Open) {
        course.students.push(student);
        console.log(`${student.name} enrolled in ${course.title}`);
    } else {
        console.log(`Cannot enroll. Course is ${course.status}`);
    }
}
const student1: Student = {
    id: 1,
    name: "Moss"
};

const student2: Student = {
    id: 2,
    name: "Joy"
};
const course: Course = {
    title: "Introduction to TypeScript",
    code: "TS101",
    status: CourseStatus.Open,
    students: []
};
enroll(student1, course);
enroll(student2, course);
console.log(course.students);