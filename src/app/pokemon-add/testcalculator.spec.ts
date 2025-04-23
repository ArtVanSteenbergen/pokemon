describe('calculator',()=> {
    beforeEach(async()=>{

    })

    it('if I add 1 + 1 I expect a result of 2',()=>{
        var a = 1;
        var b = 1;

        var result = caclulate(a,b);

        expect(result).toEqual(2);

    })
    it('if I add 99999 + 99999 I expect a result of 199998',()=>{
        var a = 99999;
        var b = 99999;

        var result = caclulate(a,b);

        expect(result).toEqual(199998);
    })
    it('if i add -2 + 1 I expect a result of error',()=>{
        var a = -2;
        var b = 1;

        var result = caclulate(a,b);

        expect(result).toEqual('error');
    })
    it('',()=>{

    })
})