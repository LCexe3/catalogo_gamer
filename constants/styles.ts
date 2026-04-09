import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // ======================
  // LAYOUT
  // ======================
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
    padding: 20,
  },

  padding: {
    padding: 20,
  },

  gap20: {
    gap: 20,
  },

  gap15: {
    gap: 15,
  },

  marginTop30: {
    marginTop: 30,
  },

  // ======================
  // TEXTOS
  // ======================
  tituloGrande: {
    fontSize: 34,
    fontWeight: '800',
    color: '#8a2be2',
    textAlign: 'center',
    textShadowColor: '#8a2be2',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  tituloMedio: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00ffcc',
    textAlign: 'center',
  },

  texto: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },

  link: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  neonTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#00ffcc',
    marginBottom: 20,
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  // ======================
  // INPUT
  // ======================
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderWidth: 2,
    borderColor: '#00ffcc',
    borderRadius: 12,
    padding: 14,
    width: '85%',
    fontSize: 16,
  },

  inputPrimary: {
    borderColor: '#00ffcc',
    marginBottom: 10,
  },

  inputSecondary: {
    borderColor: '#8a2be2',
    marginBottom: 20,
  },

  inputError: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },

  // ======================
  // BUTTON
  // ======================
  button: {
    backgroundColor: '#8a2be2',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#00ffcc',

    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,

    minWidth: 180,
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },

  // ======================
  // NAV
  // ======================
  drawerStyle: {
    backgroundColor: '#111',
    width: 240,
  },

  tabBar: {
    backgroundColor: '#111',
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
  },
})

export default styles