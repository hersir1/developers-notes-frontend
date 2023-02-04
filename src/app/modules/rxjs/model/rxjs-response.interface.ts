export interface RxjsResponse {
    id: number;
    name: string;
}

export interface RxjsShowData {
  emitValue: number;
  rxjsResponse: RxjsResponse | null;
}
