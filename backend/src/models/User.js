import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        //스페이스를 없애는 역할
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    //반드시 오브젝트를 쓰지 않아도 됨
    image: String,
    //유효성확인을 위한 토큰
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//model을 mongoose에서 사용할 수 있도록 함
const User = mongoose.model('User', userSchema);

export default User;