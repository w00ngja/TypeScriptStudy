"use strict";
class Department {
    // 인스턴스가 생성될 때 실행
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // 키이름과 타입을 지정
        // name: string;
        this.employees = []; // 값을 할당할수도 있다.
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    // Static Method
    static createEmployee(name) {
        return { name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'ITNAME');
        this.admins = admins;
    }
    describe() { }
}
class HRDepartment extends Department {
    constructor(id, reports) {
        super(id, 'HRNAME');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (HRDepartment.instance) {
            return this.instance;
        }
        this.instance = new HRDepartment('d2', []);
        return this.instance;
    }
    describe() { }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('기록이 존재하지 않습니다.');
    }
    set mosetRecentReport(value) {
        if (!value) {
            throw new Error('추가할 값을 입력해주세요.');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'MAX')
            return;
        // 상위 클래스에서 protected로 초기화했기 때문에 접근가능하다.
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
        this.printReports();
    }
    printReports() {
        console.log(this.reports);
    }
}
// 외부에서 접근할 수 없는 클래스 인스턴스를 저장
HRDepartment.instance = HRDepartment;
// Static 키워드를 통해 인스턴스를 생성하지 않고도 클래스 내부의 메서드를 사용할 수 있다.
const employee1 = Department.createEmployee('Mina');
console.log(employee1);
console.log(Department.fiscalYear);
const accountingHR = new HRDepartment('HR1', []);
accountingHR.addReport('Somethings wrong');
// Getter
console.log(accountingHR.mostRecentReport);
// Setter
accountingHR.mosetRecentReport = 'this is last';
// super을 통해 name 프로퍼티를 직접 전달하기 때문에,
// 인스턴스 생성 간 별도로 명시하지 않아도 에러가 발생하지 않는다.
const accountingIT = new ITDepartment('IT1', ['MAX']);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// 직접 배열에 접근하여 값을 수정할수도 있지만, 권장하지 않음
// private 변수를 통해 접근을 막을 수 있음 (TS Error로)
// accounting.employees[2] = 'anna';
