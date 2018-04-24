<!--

function disp(){
	// スクリプト部分はヘッダに書いておけばいい
	// スクリプトとhtml本体の文字コードは統一しないと文字化けが起きる
	// 「OK」時の処理開始 ＋ 確認ダイアログの表示
	if(window.confirm('もう一回呼んでみる')){

		location.href = "main.html"; // example_confirm.html へジャンプ

	}
	// 「OK」時の処理終了

	// 「キャンセル」時の処理開始
	else{

		window.alert('本当に……呼んでないんだね?'); // 警告ダイアログを表示

	}
	// 「キャンセル」時の処理終了

}

// -->
