//your JS code here. If required.
const titleInput=document.getElementById('title');
const authorInput=document.getElementById('author');
const isbnInput=document.getElementById('isbn');
const bookList=document.getElementById('book-list');
const submitBtn=document.getElementById('submit');
submitBtn.addEventListener('click',function(e){
	e.preventDefault();
	const title=titleInput.value;
	const author=authorInput.value;
	const isbn=isbnInput.value;
	if(title === ''||author===''||isbn===''){
		return;
	}
	const row=document.createElement('tr');
	row.innerHTML=`
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
	`;
	bookList.appendChild(row);
	titleInput.value='';
	authorInput.value='';
	isbnInput.value='';
});
bookList.addEventListener('click',function(e){
	if(e.target.classList.contains(delete)){
		e.preventDefault();
		e.target.parentElement.parentElement.remove();
	}
});