export function level_string_to_int(LEVEL: string): number | undefined {
	let LEVEL_N: number | undefined;

	switch (LEVEL) {
		case "LEVEL1":
			LEVEL_N = 1;
			break;
		case "LEVEL2":
			LEVEL_N = 2;
			break;
		case "LEVEL3":
			LEVEL_N = 3;
			break;
		case "LEVEL4":
			LEVEL_N = 3;
			break;
		case "LEVEL5":
			LEVEL_N = 3;
			break;
		default:
			// 未知の値に対するデフォルト処理
			break;
	}
	return LEVEL_N;
}
export function level_int_to_string(LEVEL_N: number): string | undefined {
	let LEVEL_S: string | undefined;

	switch (LEVEL_N) {
		case 1:
			LEVEL_S = "LEVEL1";
			break;
		case 2:
			LEVEL_S = "LEVEL2";
			break;
		case 3:
			LEVEL_S = "LEVEL3";
			break;
		case 4:
			LEVEL_S = "LEVEL4";
			break;
		case 5:
			LEVEL_S = "LEVEL5";
			break;
		default:
			// 未知の値に対するデフォルト処理
			break;
	}
	return LEVEL_S;
}