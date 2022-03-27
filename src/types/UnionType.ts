interface I1{
    name : string;
    age:number;
}

interface I2{
    name : string;
    desc : string;
    pages:number;
}

type UnionType = I1 | I2;
export default UnionType;