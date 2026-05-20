import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, get, set, child, push, onValue, update, remove, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyC_mckTsGtRfH1FavUjzMLwt-eSD-zIaC4",
  authDomain: "test-98b9a.firebaseapp.com",
  databaseURL: "https://test-98b9a-default-rtdb.firebaseio.com",
  projectId: "test-98b9a",
  storageBucket: "test-98b9a.firebasestorage.app",
  messagingSenderId: "183537338072",
  appId: "1:183537338072:web:518f92cf564a000b0779ad",
  measurementId: "G-31QE3XRGL2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const initDatabase = async () => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, 'users/EricLM'));
    if (!snapshot.exists()) {
      await set(ref(db, 'users/EricLM'), {
        password: 'Evo@537361',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=Eric+LM&background=4f46e5&color=fff',
        createdAt: serverTimestamp()
      });
      console.log('✅ Usuário ADM criado com sucesso.');
    }
  } catch (error) {
    console.error('Erro ao inicializar banco:', error);
  }
};

initDatabase();

export { db, ref, get, set, child, push, onValue, update, remove, serverTimestamp };