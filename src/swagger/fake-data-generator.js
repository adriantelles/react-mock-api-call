class FakeDataGenerator{
    constructor() {
        this.initialIdPool = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.initialFirstNamePool = ['Barry', 'Iris', 'Caitlin', 'Cisco', 'Joe', 'Harry', 'Wally', 'Eddie', 'Henry'];
        this.initialLastNamePool = ['Allen', 'Snow', 'Ramon', 'Wells', 'Horton', 'West', 'Thawne', 'Runk'];
        this.resetUsedDataPool();
    }

    getRandomFromArray(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomValue = array[randomIndex];
        array.splice(randomIndex, 1);
        return randomValue;
    }

    generateFakeId(){
        return this.getRandomFromArray(this.idPool);
    }

    generateFakeFirstName(){
        return this.getRandomFromArray(this.firstNamePool);
    }

    generateFakeLastName(){
        return this.getRandomFromArray(this.lastNamePool);
    }

    getFakeUserObj(){
        return {
            id: this.generateFakeId(),
            firstName: this.generateFakeFirstName(),
            lastName: this.generateFakeLastName()
        };
    }

    resetUsedDataPool(){
        this.idPool = [...this.initialIdPool];
        this.firstNamePool = [...this.initialFirstNamePool];
        this.lastNamePool = [...this.initialLastNamePool];
    }

    getFakeUserJSON(){
        return {"person": [
                this.getFakeUserObj(),
                this.getFakeUserObj(),
                this.getFakeUserObj(),
        ]};
    }

    getFakeUserXML(){
        const userRandomData = this.getFakeUserJSON();
        return `<persons>
            ${userRandomData.person.map(({id, firstName, lastName})=>{
                return `<person>
                    <id>${id}</id>
                    <firstName>${firstName}</firstName>
                    <lastName>${lastName}</lastName>
                </person>`
            }).join('\n')}
        </persons>`
    }
}

export const fakeDataGenerator = new FakeDataGenerator();
