-- Users
INSERT INTO public.users
(id, created_at, pass, email)
VALUES('8dfff74f-ff77-4b88-bbb6-6f31fb0c8599', '2025-01-16 20:16:37.776', '$2a$12$JUmM43kcsS6fHrPBOd64J.Q05lbC1Y8QfqhBCpN6tPSKHe0gt9xYC', 'ivannarvaez17@gmail.com');

-- Stocks
INSERT INTO public.stocks
(id, created_at, "name", ticker, img_url)
VALUES('8c6d7ffe-8171-4f79-8a27-e253dcf1ee13', '2025-01-19 22:12:32.804', 'Apple Inc.', 'AAPL', 'https://api.polygon.io/v1/reference/company-branding/d3d3LmFwcGxlLmNvbQ/images/2022-01-10_icon.png?apiKey=p_hx1miTyHR5DJA_XIFfdxcB7Ls7oOrF');
INSERT INTO public.stocks
(id, created_at, "name", ticker, img_url)
VALUES('ff33315f-4bfa-4110-b5a8-046c72dc0118', '2025-01-19 22:15:55.934', 'Spotify Technology S.A.', 'SPOT', 'https://api.polygon.io/v1/reference/company-branding/c3BvdGlmeS5jb20/images/2024-10-01_icon.jpeg?apiKey=p_hx1miTyHR5DJA_XIFfdxcB7Ls7oOrF');
INSERT INTO public.stocks
(id, created_at, "name", ticker, img_url)
VALUES('d071ce50-22a7-4edf-b6eb-0ae2faa54bb4', '2025-01-19 22:15:55.971', 'Adobe Inc.', 'ADBE', 'https://api.polygon.io/v1/reference/company-branding/YWRvYmUuY29t/images/2024-10-01_icon.png?apiKey=p_hx1miTyHR5DJA_XIFfdxcB7Ls7oOrF');
INSERT INTO public.stocks
(id, created_at, "name", ticker, img_url)
VALUES('f9bf0dbe-dd89-4ad7-b1f9-843a3422a3a7', '2025-01-19 22:15:55.998', 'Lyft, Inc.', 'LYFT', 'https://api.polygon.io/v1/reference/company-branding/bHlmdC5jb20/images/2024-10-01_icon.jpeg?apiKey=p_hx1miTyHR5DJA_XIFfdxcB7Ls7oOrF');

-- User_Stocks
INSERT INTO public.user_stocks
(id, created_at, stock_id, user_id)
VALUES('4168e175-5930-4122-9e40-e13020a95878', '2025-01-19 22:17:34.620', '8c6d7ffe-8171-4f79-8a27-e253dcf1ee13', '8dfff74f-ff77-4b88-bbb6-6f31fb0c8599');
INSERT INTO public.user_stocks
(id, created_at, stock_id, user_id)
VALUES('f7510d26-1126-4edc-befe-90be7f97f850', '2025-01-19 22:17:34.736', 'ff33315f-4bfa-4110-b5a8-046c72dc0118', '8dfff74f-ff77-4b88-bbb6-6f31fb0c8599');
INSERT INTO public.user_stocks
(id, created_at, stock_id, user_id)
VALUES('b45cf6af-4f23-44d3-88f4-3035bffe5b01', '2025-01-19 22:17:34.767', 'd071ce50-22a7-4edf-b6eb-0ae2faa54bb4', '8dfff74f-ff77-4b88-bbb6-6f31fb0c8599');
INSERT INTO public.user_stocks
(id, created_at, stock_id, user_id)
VALUES('5b0a752a-835e-4226-aa6d-57a1751754b7', '2025-01-19 22:17:34.802', 'f9bf0dbe-dd89-4ad7-b1f9-843a3422a3a7', '8dfff74f-ff77-4b88-bbb6-6f31fb0c8599');
