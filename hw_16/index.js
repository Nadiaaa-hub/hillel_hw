class Student {
  constructor(name, surname, birthdayYear, marks) {
    this.name = name;
    this.surname = surname;
    this.birthdayYear = birthdayYear;
    this.marks = marks;
    this.attendance = new Array(0);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    const result = currentYear - this.birthdayYear;
    console.log(`${this.name}'s age is: ${result}`);
  }

  gradePointAverage() {
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    const marksAvarage = sum / this.marks.length;
    //   console.log(sum);
    console.log(`${this.name}'s mark avarage is: ${marksAvarage.toFixed(1)}`);
  }
  attendanceAverage() {
    const total = this.attendance.length;
    const attended = this.attendance.reduce((acc, att) => {
      if (att === true) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const average = attended / total;
    console.log(`${this.name}'s attendance average is: ${average.toFixed(2)}`);
  } //не розумію як це зробити

  present() {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    } else {
      console.log("Attendance is full!");
    }
  }

  absent() {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    }
  }

  summary() {
    const marksAvarage = this.gradePointAverage();
    const attAverage = this.attendanceAverage();
    if (marksAvarage > 90 && attAverage > 0.9) {
      return "Well done!";
    } else if (marksAvarage < 90 || attAverage < 0.9) {
      return "Good, but could be better";
    } else {
      return "Radish!";
    }
  }
}

const student1 = new Student("Nadia", "Ch", 2006, [90, 100, 100]);
student1.getAge();
student1.gradePointAverage();
student1.attendanceAverage();
const student2 = new Student("Susana", "Lb", 2009, [4, 6, 7]);
student2.getAge();
student2.gradePointAverage();
student2.summary();
student1.summary();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2.attendance.length);
