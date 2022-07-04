import axios from 'axios';

type listItem = {
  text: string,
  isDone: boolean,
  ID: number
}

let items: listItem[] = []

document.getElementById('addItem')!.addEventListener('click', event => {
  event.preventDefault()

  const item: listItem = {
    text: (document.getElementById('item') as HTMLInputElement).value,
    isDone: false
  }

  axios.post('/items', item)
    .then(() => {
    (document.getElementById('item') as HTMLInputElement).value = ''
      getItems()
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if ((event?.target as Element).className === 'delete') {
    //items = items.filter(item => item.text !== (event?.target as HTMLElement).dataset.text)
    axios.post('/remove', (event?.target as Element))
      .then(() => {
        getItems()
      })
      .catch(err => console.error(err))
  }
})

const getItems = () => {
  axios.get('/items')
    .then(res => {
      console.log(res.data)
      items = res.data

      // CLEAR ITEM DISPLAY
      document.getElementById('items')!.innerHTML = ''

      // SORT THROUGH NEW ARRAY AND PLACE ON ITEM DISPLAY
      items.forEach(item => {
        const itemElem = document.createElement('div')
        itemElem.innerHTML = `
          <p>${item.text}</p>
          <button class="update" data-text="${item.text}">${item.isDone ? 'Done' : 'Not Done'}</button>
          <button class="delete" id="${item.ID}" data-text="${item.text}">X</button>
          <hr>
          `
        document.getElementById('items')?.append(itemElem)
      })
    })
    .catch(err => console.error(err))
}

getItems()