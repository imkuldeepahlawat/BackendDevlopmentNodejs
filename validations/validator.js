const queryValidator = (data) =>{
    const result = schema.validate(data);
    return result.error;
}