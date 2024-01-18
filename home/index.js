function ValidaCPF(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo',{
    enumerable: true,
    get: function(){
        return cpfEnviado.replace(/\D+/g, '');
    }
  })
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
   return true; 
};

const cpf = new ValidaCPF('702.674.756-83');
// cpf.valida();
console.log(cpf.cpfLimpo);