function sayHello()
{
    const name = 'Murilo';

    return function saySomething()
    {
        return `Olá ${name}`;
    }
}


const message = sayHello();

console.log(message());