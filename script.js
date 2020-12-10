function _load(){
	//Egy todo applikáció létrehozása, webes felület: legalább 10sor, minden sorban legyen egy checkbox, ki lehet pipálni, hogy elkészült afeladat, szöveges mező a feladatban, minden sorban legyen egy törlés gomb, 10 db elemből álljon a lista, de bovitheto legyen egy uj feladat hozzáadása nevű gombbal.

	// 0. pont eltároljuk a root elemet változóban.
	let root = document.getElementById("root");

	//1. pont egy változóba beleírjuk több soros `` azt az egysorso html kódunkat, a div-en belül van egy text, button delete (button class kell neki) (10 db id nem lehet)

	let item = `
	<div class="row"></div>
	<div>
		<input type="checkbox">
		<input type="text">
		<button class="delete">Delete</button>
	</div>
	`; 
	
	//2.lépés el kell menteni változóba ezt a 10-es számot
	let number = 10;

	// 3.lépés for ciklusban elszámolunk 10-ig, insertAdjacent Html -lel létrehozunk 10db másolatot a felette levő sorból,( hogy egymás után jöhessenek sorba: beforeend)
	for (let i = 0; i < number; i++) {
		root.insertAdjacentHTML("beforeend", item);
	}

	//4.lépés uj gomb hozzaadasa root elemen kivulre insertAdjacentHtml-lel(afterend)
		root.insertAdjacentHTML("afterend", `
			<button id="add">Add Item</button>
	
	`);

	
	
	//5.lépés uj hozzadasas click esemény, ennek legyen idja, document.getelementbyid.addeventlistener("click")
	function addNewItem() {
		root.insertAdjacentHTML("beforeend", item);
		//TODO:valahogy itt kéne rátenni az uj elemre a torlés fuggvényt.
	}
		document.getElementById("add").addEventListener("click", addNewItem);

	//6.lépés ki kell jelölni az összes törlés gombot, és ha valamelyikre kattintunk, azt a sort töröljük ki. (mentsük el queryselectorral egy változóban az összes sort, for ciklussal menjünk végig az így összegyűjött html elemeinken, a tömb hosszúságát azt vesszük alapul a for ciklusnál és mindegyikre rárakunk egy click eseményt a törlés gombra

	let deleteButtons = root.querySelectorAll(".delete");

	function deleteItem(e) {
		//console.log("deleteButton clicked");
		//console.log(e.target.parentElement);
		e.target.parentElement.remove();

	}
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", deleteItem);
		
	}

	//7.lépés kattintásfigyelő, készítünk egy függvényt.

	//8.lépés az elkészített függvényben, a törlés gomb befoglaló sorát kitöröljük. a törlés gombra kattintás eseményre rárakjuk a click eseményt, kitörölje azt a sort, ahol mindenki













}
window.addEventListener("load", _load);