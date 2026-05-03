PRD — Kogniżyćko: Gra Karcianka o Twoim Mózgu
Wersja: 1.0 Data: kwiecień 2026 Status: W trakcie rozwoju (MVP)

1. Cel

Kogniżyćko to przeglądarkowa gra karcianka, w której gracz przeżywa całe ludzkie życie (0–100 lat) — rok po roku — podejmując decyzje napędzane przez struktury mózgu. Zamiast klepania fiszek z neuroanatomii, gracz uczy się przez emocje, humor i konsekwencje własnych wyborów.

Główna obietnica dla gracza:

„Przeżyj całe życie w 30 minut. Dowiedz się, dlaczego Twój mózg kazał Ci zjeść kredkę w wieku 3 lat, olać kolokwium w wieku 20 i spanikować na rozmowie o pracę w wieku 25 — i jakie struktury za tym stoją." 2. Dla kogo jest ta gra?

Gra jest przeznaczona głównie dla studentów, którzy muszą opanować neuroanatomię do egzaminu, ale nie chcą klepać fiszek. Główne scenariusze:

Student psychologii przygotowujący się do kolokwium z neuroanatomii.

Student kognitywistyki lub neuronauk, który woli uczyć się przez historie niż przez diagramy.

Ktokolwiek ciekawy, jak działa jego własny mózg — gra jest zrozumiała także bez tła akademickiego.

Gra nie wymaga zakładania konta ani logowania — wszystkie dane przechowywane są lokalnie na urządzeniu gracza.

3. Co gra robi — przegląd mechanik

3.1 Pętla rozgrywki (Core Gameplay Loop)

Jedna tura = jeden rok życia. Gracz przeżywa życie od narodzin (wiek 0) do naturalnego końca lub przedwczesnej śmierci. Każda tura składa się z następujących kroków:

KROK CO SIĘ DZIEJE

1. Wydarzenie System losuje jedno wydarzenie pasujące do wieku i historii gracza
2. Głosy Struktury mózgu komentują sytuację — każda ze swojej perspektywy
3. Wybór Gracz widzi 3 karty decyzji z kosztami zasobów. Jeśli nie stać go na kartę, jest zablokowana
4. Ujawnienie Karta się „odwraca" — gracz dowiaduje się, jaka struktura mózgu napędzała tę decyzję i dlaczego
5. Skutki Zmieniają się statystyki osobowości (Big5), zasoby i flagi fabularne
6. Regeneracja Zasoby odnawiają się częściowo, w zależności od profilu osobowości
7. Nowa tura Wiek +1, przejście do kolejnego roku
   3.2 Struktury mózgu (Głosy)

Centralnym elementem edukacyjnym gry są struktury mózgu, które przy każdym wydarzeniu „odzywają się" w formie dymków czatu, komentując sytuację ze swojej perspektywy. Gracz nie wybiera struktury bezpośrednio — struktury są ukryte za kartami decyzji i ujawniane dopiero po wyborze.

STRUKTURA ROLA W GRZE ROLA NEUROLOGICZNA
Ciało Migdałowate Strach, panika, reakcja walcz-lub-uciekaj Przetwarzanie emocji, szczególnie strachu
Kora Przedczołowa Planowanie, hamowanie impulsów, racjonalne decyzje Funkcje wykonawcze, kontrola poznawcza
Jądro Ogoniaste Impulsy, nawyki, pęd ku nagrodzie Część jąder podstawy, układ nagrody
Hipokamp Pamięć, kojarzenie faktów, kontekst Tworzenie i odtwarzanie wspomnień
Wyspa (Insula) Sygnały z ciała, empatia, „przeczucia" Interocepcja, świadomość stanów ciała
Wzgórze Filtrowanie bodźców, przekazywanie sygnałów Stacja przekaźnikowa informacji sensorycznych
Każda karta decyzji ma przypisaną ukrytą strukturę. Po kliknięciu gracz widzi:

Nazwę struktury

Flavor text — humorystyczny, ale naukowo poprawny opis tego, co się wydarzyło w mózgu

Wpływ na statystyki

3.3 Osobowość — Wielka Piątka (Big Five)

Postać gracza posiada 5 cech osobowości, które zmieniają się w trakcie gry w wyniku podejmowanych decyzji:

CECHA SKRÓT WYSOKI POZIOM NISKI POZIOM
Neurotyczność N Lękliwy, reaktywny emocjonalnie Spokojny, odporny na stres
Ekstrawersja E Towarzyski, energiczny Wycofany, samotnik
Otwartość O Ciekawy, kreatywny Konwencjonalny, praktyczny
Ugodowość A Empatyczny, kooperacyjny Sceptyczny, rywalizujący
Sumienność C Zorganizowany, zdyscyplinowany Spontaniczny, chaotyczny
Wartość startowa: 50 (dla każdej cechy, w skali 0–100).

Plastyczność Wiekowa

Cechy osobowości nie zmieniają się jednakowo przez całe życie. Zgodnie z badaniami (Roberts, Walton & Viechtbauer, 2006), największa plastyczność przypada na dzieciństwo, a z wiekiem osobowość stabilizuje się. Gra odzwierciedla to za pomocą mnożnika plastyczności:

WIEK MNOŻNIK UZASADNIENIE
0–5 ×1.5 Mózg jest gąbką — firmware się instaluje
6–12 ×1.2 Duża plastyczność, kluczowe doświadczenia szkolne
13–18 ×1.0 Adolescencja — bazowa zmienność
19–25 ×0.7 Stabilizacja — młody dorosły
26–40 ×0.4 Trudno się zmienić
41–60 ×0.2 Osobowość prawie stała
61+ ×0.1 „Stary pies, nowe sztuczki?"
Przykład: Karta mówi N: +5. Gracz ma 3 lata → rzeczywista zmiana = round(5 × 1.5) = +8. Ten sam gracz z tą samą kartą w wieku 45 lat → round(5 × 0.2) = +1.

Korytarz Genetyczny

Każda cecha ma zakres ±30 punktów od wartości startowej (50), co daje minimalną wartość 20 i maksymalną 80. Odzwierciedla to fakt, że cechy Big5 są w 40–60% dziedziczne (Bouchard & McGue, 2003). Gdy gracz osiągnie genetyczny sufit lub podłogę, dalsze zmiany w tym kierunku nie działają.

3.4 Trzy Waluty Mózgu (System Zasobów)

Oprócz osobowości, postać posiada trzy zasoby, które decydują o tym, jakie opcje są dostępne w danej turze:

ZASÓB SYMBOL ODPOWIEDNIK NEUROLOGICZNY ROLA W GRZE
Energia 🔋 Dopamina (układ nagrody) Paliwo do działania. Bez niej nie podejmiesz aktywnych decyzji.
Nastrój 😊 Serotonina (regulacja emocji) Filtr emocjonalny. Niski nastrój = pesymistyczny świat.
Siła Woli 🧠 Kora Przedczołowa (kontrola impulsów) Zdolność do trudnych, racjonalnych wyborów.
Parametry:

Zakres: 0–100

Wartość startowa: 70 (każdy zasób)

Regeneracja zasobów (koniec każdej tury)

ZASÓB BAZOWY REGEN/TURĘ
🔋 Energia +3
😊 Nastrój +2
🧠 Siła Woli +2
Modyfikatory od Big5:

WARUNEK EFEKT NA REGENERACJĘ
Neurotyczność > 70 😊 Nastrój regen −1
Neurotyczność > 90 😊 Nastrój regen −2
Sumienność > 60 🧠 Siła Woli regen +1
Sumienność < 30 🧠 Siła Woli regen −1
Ekstrawersja > 60 🔋 Energia regen +1
Ekstrawersja < 30 🔋 Energia regen −1
Ugodowość > 70 😊 Nastrój regen +1, 🧠 Siła Woli regen −1
Otwartość > 70 🔋 Energia regen +1, 🧠 Siła Woli regen −1
3.5 System decyzji (Karty)

Każde wydarzenie oferuje dokładnie 3 karty decyzji. Karty różnią się typem, kosztem i konsekwencjami:

TYP KARTY TYPOWY KOSZT NAPĘDZAJĄCA STRUKTURA PRZYKŁAD
Racjonalna 🧠 Siła Woli: −3 do −5 Kora Przedczołowa „Zaplanuj i działaj systematycznie"
Aktywna 🔋 Energia: −3 do −5 Jądro Ogoniaste / Hipokamp „Zarwij nockę", „Idź na imprezę"
Empatyczna 😊 Nastrój: −2 do −4 Wyspa „Weź na siebie cudzy problem"
Impulsywna BRAK KOSZTU Ciało Migdałowate / Jądro Ogoniaste „Uciekaj", „Zjedz to", „Olej to"
Unikająca BRAK KOSZTU Ciało Migdałowate „Schowaj się", „Udawaj że nie widzisz"
Kluczowa zasada designu:

Karty BEZ KOSZTU są zawsze dostępne, ale mają NEGATYWNE konsekwencje dla osobowości. Karty Z KOSZTEM dają pozytywne efekty, ale wymagają zasobów mentalnych. DARMOWE ≠ DOBRE. To jest centralna lekcja gry.
Blokowanie kart: Jeśli gracz nie posiada wystarczającej ilości danego zasobu, aby pokryć koszt karty, karta jest wyszarzona i nieklikalna. Nie ma żadnych globalnych progów ani stref — jedyną regułą jest: „Czy stać Cię na tę kartę?"

3.6 System flag (Pamięć Gry)

Flagi to proste znaczniki tekstowe (np. trauma_ciemnosci, ma_przyjaciel, uzalezniony_od_kawy), które gra zapamiętuje po dokonaniu wyboru. Flagi wpływają na:

Dostępność wydarzeń — niektóre eventy pojawiają się TYLKO jeśli gracz ma konkretną flagę.

Wykluczanie wydarzeń — niektóre eventy NIE pojawiają się, jeśli gracz ma daną flagę.

Modyfikację tekstów — głosy struktur mogą reagować na historię gracza.

Przykład ciągłości narracyjnej:

Wiek 2: Event „Potwór z szafy" → gracz ucieka pod kołdrę → flaga: trauma_ciemnosci

Wiek 8: Event „Kolega proponuje wejście do piwnicy" → pojawia się TYLKO jeśli gracz ma flagę trauma_ciemnosci → Ciało Migdałowate komentuje: „To jak w tej szafie! Uciekaj!"

3.7 System porażki (Śmierć)

Śmierć w grze jest zawsze wydarzeniem narracyjnym z kartami decyzji — nigdy nagłym, losowym wynikiem ukrytego wzoru matematycznego. Gracz zawsze ma szansę się uratować, ale ratunek kosztuje zasoby, których może nie mieć.

Warunki pojawienia się wydarzenia śmierci

Eventy zagrażające życiu wchodzą do puli wydarzeń, gdy spełnione są określone warunki fabularne i mechaniczne:

WARUNEK PRZYKŁAD
Krytycznie niskie zasoby Dwa lub więcej zasobów poniżej 10
Kumulacja destrukcyjnych flag uzalezniony + samotny + depresja
Wiek + niskie zasoby Wiek > 60 + Energia < 20
Pojedyncze ekstremalne flagi ciezka_choroba
Struktura wydarzenia śmierci

Każde wydarzenie śmierci zawiera minimum dwie karty:

KARTA TYP EFEKT
Karta destrukcyjna Darmowa (impulsywna/unikająca) Prowadzi do śmierci. Koniec runu.
Karta ratunkowa Kosztowna (wymaga zasobów) Ratuje życie, ale z poważnymi konsekwencjami (reset zasobów, utrata flag, przeskok lat).
Kluczowa zasada:

Gracz umiera WYŁĄCZNIE przez swoje wcześniejsze decyzje. Jeśli nie stać go na kartę ratunkową, to dlatego, że wcześniej roztrwonił zasoby. Śmierć jest puentą, nie karą.
Naturalna śmierć

Jeśli gracz dożyje do wieku 80–100 lat, gra kończy się naturalnie z podsumowaniem „pełnego życia". Dokładny wiek naturalnej śmierci może być modyfikowany przez stan zasobów i profil osobowości (do dopracowania w przyszłych wersjach).

4. Widoki aplikacji

4.1 Widok: Ekran Startowy

Pierwszy ekran, który widzi gracz po otwarciu aplikacji.

Co zawiera:

Tytuł gry „Kogniżyćko" z krótkim podtytułem (np. „Przeżyj życie. Poznaj swój mózg.").

Przycisk „Nowe życie" — rozpoczyna nowy run z domyślnymi statystykami.

Przycisk „Kontynuuj" — wznawia zapisany run (widoczny tylko gdy istnieje zapis).

Krótki opis gry (2-3 zdania) dla nowych graczy.

4.2 Widok: Ekran Gry (główny)

Centralny widok rozgrywki. Wyświetlany podczas każdej tury.

Co zawiera:

Górny pasek statusu:

Wiek postaci i nazwa aktualnej ery (np. „Dzieciństwo", „Adolescencja").

5 wskaźników Big5 (N, E, O, A, C) w formie mini-pasków lub wartości liczbowych.

3 wskaźniki zasobów (🔋 Energia, 😊 Nastrój, 🧠 Siła Woli) jako kolorowe paski z wartościami. Kolor paska zmienia się informacyjnie: zielony (>60), żółty (30–60), czerwony (<30).

Sekcja sceny: Tekst opisujący sytuację (sceneText).

Sekcja głosów: Dymki czatu od 2–3 struktur mózgu komentujących sytuację.

Sekcja decyzji: 3 karty decyzji ułożone obok siebie. Każda karta pokazuje:

Tekst decyzji.

Koszt zasobu (ikona + liczba, np. 🧠 −4). Karty darmowe oznaczone jako „Darmowe".

Stan karty: aktywna (klikalna) lub zablokowana (wyszarzona, gdy brak zasobów).

Stan po kliknięciu karty (ujawnienie): Karta „odwraca się" lub rozwija panel, pokazując:

Nazwa ukrytej struktury mózgu.

Flavor text (wyjaśnienie edukacyjne napisane z humorem).

Zmiana statystyk (np. „N +5, C −3").

Przycisk „Następny rok →".

4.3 Widok: Ekran Końcowy (Game Over)

Wyświetlany po śmierci postaci lub po naturalnym zakończeniu życia.

Co zawiera:

Sekcja A — Nagłówek:

„Koniec życia" + wiek postaci w momencie zakończenia.

Jeśli śmierć przedwczesna: powód śmierci (np. „Przeciążenie allostatyczne").

Jeśli naturalna śmierć: gratulacyjna wiadomość (np. „System przetrwał pomyślnie!").

Sekcja B — Profil Psychologiczny (Wielka Piątka):

Końcowe wartości 5 cech z tytułami opisowymi (np. N: 78 → „Hipochondryk / Panikarz", C: 22 → „Kreatywny Chaos").

Sekcja C — Raport Dominującej Struktury:

Krótkie podsumowanie, która struktura mózgu „rządziła" w tym życiu, na podstawie profilu osobowości (np. „Autopsja wykazała, że stery najczęściej przejmowało Ciało Migdałowate").

Sekcja D — Przycisk:

„Zagraj ponownie (Nowe Życie)" — resetuje stan i zaczyna od zera.

5. Filtrowanie wydarzeń

System wyboru wydarzenia na każdą turę działa następująco:

Filtruj po wieku — każde wydarzenie ma zdefiniowany zakres wiekowy (ageRange: [min, max]). Do puli trafiają tylko te pasujące do aktualnego wieku gracza.

Filtruj po flagach — jeśli wydarzenie wymaga flagi (requiresFlag), sprawdź czy gracz ją posiada. Jeśli wydarzenie wyklucza flagę (excludesFlag), sprawdź czy gracz jej NIE posiada.

Sprawdź warunki zasobów — jeśli wydarzenie ma warunek zasobowy (resourceCondition), sprawdź czy jest spełniony (np. mood < 20 dla eventów depresyjnych).

Priorytet wydarzeń specjalnych — eventy typu crisis (zagrażające życiu) i rescue (ratunkowe) mają priorytet nad zwykłymi, jeśli ich warunki są spełnione.

Losuj — z przefiltrowanej puli wylosuj jedno wydarzenie. Usuń je z puli (gracz nie zobaczy tego samego wydarzenia dwa razy w jednym runie).

6. Zapis gry

Gra automatycznie zapisuje stan po każdej turze w pamięci lokalnej przeglądarki. Zapis obejmuje:

Wiek postaci.

Aktualne wartości Big5 i wartości startowe Big5 (potrzebne do korytarza genetycznego).

Aktualne wartości zasobów.

Tablicę aktywnych flag.

Listę ID już rozegranych wydarzeń (aby uniknąć powtórzeń).

Ewentualny powód śmierci.

Gracz może kontynuować zapisaną grę z ekranu startowego lub rozpocząć nową, co nadpisuje poprzedni zapis.

7. Ery życia

Gra dzieli życie na ery, które służą jako organizacyjne ramy dla wydarzeń i jako informacja kontekstowa dla gracza:

ERA WIEK NAZWA CHARAKTERYSTYKA
I 0–2 Firmware Instalacja bazowego oprogramowania. Odruchowe reakcje.
II 3–5 Patch Notes Pierwsze patche świadomości. Eksplozja „dlaczego?".
III 6–12 Early Access Szkoła, reguły, socjalizacja. System się kalibruje.
IV 13–18 Open Beta Hormony, bunt, tożsamość. Testowanie granic systemu.
V 19–25 Release 1.0 Studia, praca, związki. Premiera w świecie dorosłych.
VI 26–40 DLC: Kariera Odpowiedzialność, rutyna, ambicje i kryzysy.
VII 41–60 Midlife Patch Bilans życia, zmiany, akceptacja lub bunt.
VIII 61–80 Legacy Mode Spowolnienie, mądrość, retrospekcja.
IX 81–100 End of Support Ostatnie tury. Podsumowanie dzieła życia. 8. Co jest poza zakresem obecnej wersji

Poniższe funkcje nie są częścią wersji MVP, ale mogą pojawić się w przyszłości:

Element encyklopedyczny — klikalne tooltips przy nazwach struktur mózgu z rozszerzonymi opisami i źródłami naukowymi.

Cytowanie źródeł naukowych — odnośniki do badań przy flavor textach.

Archetypy postaci — różne zestawy startowe Big5 (np. „Introwertyk", „Ryzykant") zamiast domyślnego 50/50/50/50/50.

System substancji — mechanika uzależnień wpływająca na zasoby i flagi.

Porównywanie wyników — udostępnianie profilu psychologicznego po zakończeniu gry.

Synchronizacja między urządzeniami.

Wersja mobilna (PWA).

Tryb nauczyciela — panel do tworzenia własnych wydarzeń i pul kart.

System dominacji głosów — struktury mózgu zyskują/tracą wpływ na podstawie historii decyzji.

Eventy ratunkowe — specjalne wydarzenia pomagające wyjść ze spirali (np. „Przypadkowa rozmowa z psychologiem").

Dojrzewanie osobowości — automatyczny drift Big5 z wiekiem (np. N naturalnie spada po 30. roku życia).
