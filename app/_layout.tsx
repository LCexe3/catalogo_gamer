import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Inicio',
          title: 'Bem vindo',
        }}
      />
      <Drawer.Screen
        name="form" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Entrar',
          title: 'Cadastro',
        }}
      />
      <Drawer.Screen
        name="tabs" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Aulas',
          title: 'Cadastro',
        }}
      />
      <Drawer.Screen
        name="stack" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Downlaoads',
          title: 'Cadastro',
        }}
      />
    </Drawer>
    
  );
}