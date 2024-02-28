import {
    getAuth,
    createUserWithEmailAndPassword, // Corrigido aqui
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';
import {app} from '../firebase/config';

export const useAuthentication = () => {
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(null);

      // cleanup
      // deal with memory leak
      const [cancelled, setCancelled] = useState(false);

      const auth = getAuth(app);

      function checkIfCancelled() {
          if (cancelled) {
              return;
          }
      }

      const createUser = async (data) => {
         checkIfCancelled();

         setLoading(true);
         setError(null);

         const firabaseErrorCodes = {
                'auth/email-already-in-use': 'Email já cadastrado, caso tenha esquecido a senha clique em "Esqueci minha senha"',
                'auth/weak-password': 'Senha inválida, a mesma precisa conter pelo menos seis caracteres.'
         }

         try{
             const {user} =  await createUserWithEmailAndPassword(auth, data.email, data.password); // Corrigido aqui
             await updateProfile(user, {displayName: data.displayName});
             setLoading(false);
             return user;

         }catch(err){
            // Validar se o erro é um dos erros conhecidos
            const errorMessage = firabaseErrorCodes[err.code] || 'Ocorreu um erro ao criar o usuário, tente novamente.';
            setLoading(false);
            setError(errorMessage);
           
        }
        
      };

        useEffect(() => {
            return () => {
                setCancelled(true);
            };
        }, []);

      return {
        auth,
        createUser,
        error,
        loading
      };
};