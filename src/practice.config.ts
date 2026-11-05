type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const userData: ApiResponse<string> = {
  success: true,
  data: 'Hello',
};

const userData2: ApiResponse<string[]> = {
  success: true,
  data: ['je'],
};

console.log(userData2);
