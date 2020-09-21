test('can be triggered when the incoming argument is undefined', () => {
    function getName(name = 'John Doe') {
        return name;
    }

    expect(getName('Doge'))
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName(undefined))
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName(null))
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName())
        .toBe(/*ENTER YOUR GUESS HERE*/);
});

test('can trigger a function call', () => {
    let triggerCount = 0;

    function getName(name = getDefault()) {
        return name;
    }

    function getDefault() {
        triggerCount++;
        return 'John Doe';
    }

    expect(triggerCount)
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName('Aaron'))
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName())
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(getName(undefined))
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(triggerCount)
        .toBe(/*ENTER YOUR GUESS HERE*/);
});

test('catch non-specified params', () => {
    function resty(first, second, ...others) {
        return others;
    }

    expect(resty().length)
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1).length)
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2).length)
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1, 2, 3).length)
        .toBe(/*ENTER YOUR GUESS HERE*/);
    expect(
        resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length
    )
        .toBe(/*ENTER YOUR GUESS HERE*/);
});

test('it can default all arguments, optionally', () => {
    // Modify the method signature of `myFunction` to allow for
    // all args to be optional

    function myFunction({ name, age, favoriteBand }) {
        expect(name)
            .toBeDefined();
        expect(age)
            .toBeDefined();
        expect(favoriteBand)
            .toBeDefined();
    }

    myFunction({ name: 'John Doe', age: 25, favoriteBand: 'Queen' });
    myFunction({ name: 'John Doe', age: 37 });
    myFunction({ name: 'John Doe' });
    myFunction({});
    myFunction();
});
