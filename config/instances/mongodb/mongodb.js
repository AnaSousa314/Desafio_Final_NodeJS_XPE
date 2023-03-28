import {connect} from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async ()=>{
    try {
      
      console.log('Conectando ao MongoDB...');
      await connect(process.env.MONGO_URL/* , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } */);//esse comentado não é mais usado

      console.log('🔥MongoDB conectado com sucesso!');

    } catch (error) {
      console.log("Erro Conexão MongoDB: ",error);
    }
}