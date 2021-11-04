function recursiva(max)
{
    if(max >=1000000000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(1);