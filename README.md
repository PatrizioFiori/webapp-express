# webapp-express
*06/02/2025*

- Utilizzando il file in allegato, **creiamo un database** con MySQL Workbench
- Creiamo una **nuova applicazione Express**
- **Colleghiamo l’app al db** e verifichiamo che tutto funzioni
- Prepariamo **una rotta index** per ottenere la lista dei film
- Prepariamo **una rotta show** per ottenere i dettagli di un singolo film e le sue recensioni
- Inserire le vostre API in controller
- Inserire le vostre rotte in un router
- Inserire un middleware per le rotte inesistenti
- Inserire un middleware per la gestione errori  

### Bonus
- Inserire delle immagini nel progetto express e dunque nel db
- Inserire i dati di connessione al database come variabili d’ambiente
- Inserire un middleware per la gestione del percorso assoluto delle immagini
  


# webapp-express-aggiunta-form
Aggiungere l’API che gestisce l’aggiunta di una nuova recensione e, sul front end nella pagina di dettaglio, il form che invia in post la nuova recensione.

### BONUS
validazione del form prima dell’invio con eventuale messaggio di errore
Buon lavoro!

# webapp-express aggiunta form per invio dei nuovi film 


Lato beckend:
- installare multer npm i multer
- aggiungere il middlevare
- nel router importarlo ‘iniettare’ il middleware nella rotta store ex router.post('/', upload.single('image'), bookController.store)
- nel controller gestire i dati in ingresso delle req e il nome del file con req.file.filename