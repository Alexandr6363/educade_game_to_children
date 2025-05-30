input_string = "Автомобиль, Арбуз, Алфавит, Ананас, Артист, Ангел, Аппетит, Булочка, Бабушка, Бамбук, Бур, Батон, Вода, Ветка, Весна, Веник, Внук, Ворона, Град, Грот, Глаз, Грач, Губа, Груз, Гром, Гнев, Гипс, Гиря, Гриб, Гусь, Гора, Газон, Гелий, Дно, Дуб, Душ, Дача, Джем, Джип, Друг, Дыра, Диван, Дерби, Добро, Декор, Дверь, Енот, Ежевика, Единорог, Ёж, Ёлка, Ёрш, Жираф, Жара, Жильё, Железо, Жажда, Жаба, Жук, Зуб, Зубр, Звон, Заря, Зима, Змей, Знак, Зонт, Звук, Зебра, Имя, Игра, Изюм, Игла, Икра, Идея, Йод, Йогурт, Картина, Корабль, Карта, Колесо, Ключ, Краска, Коробка, Кисть, Корзина, Куртка, Люк, Лук, Лоб, Луч, Лён, Лёд, Лев, Лифт, Лама, Липа, Лиса, Лицо, Лось, Лужа, Лес, Маг, Мак, Мах, Мёд, Миг, Мел, Меч, Мим, Мир, Мор, Мох, Мазда, Мазерати, Майбах, Машина, Нож, Нут, Нос, Нюх, Низ, Небо, Нерв, Нота, Нора, Ночь, Нога, Нива, Ноль, Улитка, Угол, Уголь, Угорь, Удав, Уж, Узел, Узор, Уксус, Указка, Укроп, Улей, Улица, Утка, Утюг, Ухо, Ученик"

list = input_string.split(", ")
print(list)

list = ['Автомобиль', 'Арбуз', 'Алфавит', 'Ананас', 'Артист', 'Ангел', 'Аппетит', 'Булочка', 'Бабушка', 'Бамбук', 'Бур', 'Батон', 
        'Вода', 'Ветка', 'Весна', 'Веник', 'Внук', 'Ворона', 'Град', 'Грот', 'Глаз', 'Грач', 'Губа', 'Груз', 'Гром', 'Гнев', 'Гипс',
        'Гиря', 'Гриб', 'Гусь', 'Гора', 'Газон', 'Гелий', 'Дно', 'Дуб', 'Душ', 'Дача', 'Джем', 'Джип', 'Друг', 'Дыра', 'Диван', 
        'Дерби', 'Добро', 'Декор', 'Дверь', 'Енот', 'Ежевика', 'Единорог', 'Ёж', 'Ёлка', 'Ёрш', 'Жираф', 'Жара', 'Жильё', 'Железо', 
        'Жажда', 'Жаба', 'Жук', 'Зуб', 'Зубр', 'Звон', 'Заря', 'Зима', 'Змей', 'Знак', 'Зонт', 'Звук', 'Зебра', 'Имя', 'Игра',
        'Изюм', 'Игла', 'Икра', 'Идея', 'Йод', 'Йогурт', 'Картина', 'Корабль', 'Карта', 'Колесо', 'Ключ', 'Краска', 'Коробка', 
        'Кисть', 'Корзина', 'Куртка', 'Люк', 'Лук', 'Лоб', 'Луч', 'Лён', 'Лёд', 'Лев', 'Лифт', 'Лама', 'Липа', 'Лиса', 'Лицо',
        'Лось', 'Лужа', 'Лес', 'Маг', 'Мак', 'Мах', 'Мёд', 'Миг', 'Мел', 'Меч', 'Мим', 'Мир', 'Мор', 'Мох', 'Мазда', 'Мазерати',
        'Майбах', 'Машина', 'Нож', 'Нут', 'Нос', 'Нюх', 'Низ', 'Небо', 'Нерв', 'Нота', 'Нора', 'Ночь', 'Нога', 'Нива', 'Ноль',
        'Улитка', 'Угол', 'Уголь', 'Угорь', 'Удав', 'Уж', 'Узел', 'Узор', 'Уксус', 'Указка', 'Укроп', 'Улей', 'Улица', 'Утка',
        'Утюг', 'Ухо', 'Ученик']

def to_syr(word): 
    new_word = ''
    vowels_set = set('аеёиоуыэюяАЕЁИОУЫЭЮЯ')
    specials_set = set('йьъЙЬЪ')

    prev_vowel = len(word)
    for i in range(len(word)):
        if word[i] in vowels_set:
            prev_vowel = i
            break

    pos = 0
    for i in range(prev_vowel + 1, len(word)):
        if word[i] in vowels_set:
            a, b = prev_vowel, i
            if b - a == 1:
                new_word += word[pos:b] + '-'
                pos = b
            else:
                for j in reversed(range(a + 1, b)):
                    if word[j] in specials_set:
                        new_word += word[pos:j + 1] + '-'
                        pos = j + 1
                        break
                else:
                    if b - a == 2:
                        new_word += word[pos:b - 1] + '-'
                        pos = b - 1
                    else:
                        new_word += word[pos:a + 2] + '-'
                        pos = a + 2
            prev_vowel = i
    new_word += word[pos:]
    return str(new_word)

new_list = []
for w in list:
        new_list.append(to_syr(w))

print(new_list)

list_syr = ['Ав-то-мо-биль', 'Ар-буз', 'Ал-фа-вит', 'А-на-нас', 'Ар-тист', 'Ан-гел', 'Ап-пе-тит', 'Бу-лоч-ка', 'Ба-буш-ка', 'Бам-бук', 'Бур',
            'Ба-тон', 'Во-да', 'Вет-ка', 'Вес-на', 'Ве-ник', 'Внук', 'Во-ро-на', 'Град', 'Грот', 'Глаз', 'Грач', 'Гу-ба', 'Груз', 'Гром', 'Гнев',
            'Гипс', 'Ги-ря', 'Гриб', 'Гусь', 'Го-ра', 'Га-зон', 'Ге-лий', 'Дно', 'Дуб', 'Душ', 'Да-ча', 'Джем', 'Джип', 'Друг', 'Ды-ра', 'Ди-ван',
            'Дер-би', 'Доб-ро', 'Де-кор', 'Дверь', 'Е-нот', 'Е-же-ви-ка', 'Е-ди-но-рог', 'Ёж', 'Ёл-ка', 'Ёрш', 'Жи-раф', 'Жа-ра', 'Жиль-ё',
            'Же-ле-зо', 'Жаж-да', 'Жа-ба', 'Жук', 'Зуб', 'Зубр', 'Звон', 'За-ря', 'Зи-ма', 'Змей', 'Знак', 'Зонт', 'Звук', 'Зеб-ра', 'И-мя',
            'Иг-ра', 'И-зюм', 'Иг-ла', 'Ик-ра', 'И-де-я', 'Йод', 'Йо-гурт', 'Кар-ти-на', 'Ко-рабль', 'Кар-та', 'Ко-ле-со', 'Ключ', 'Крас-ка',
            'Ко-роб-ка', 'Кисть', 'Кор-зи-на', 'Кур-тка', 'Люк', 'Лук', 'Лоб', 'Луч', 'Лён', 'Лёд', 'Лев', 'Лифт', 'Ла-ма', 'Ли-па', 'Ли-са',
            'Ли-цо', 'Лось', 'Лу-жа', 'Лес', 'Маг', 'Мак', 'Мах', 'Мёд', 'Миг', 'Мел', 'Меч', 'Мим', 'Мир', 'Мор', 'Мох', 'Маз-да',
            'Ма-зе-ра-ти', 'Май-бах', 'Ма-ши-на', 'Нож', 'Нут', 'Нос', 'Нюх', 'Низ', 'Не-бо', 'Нерв', 'Но-та', 'Но-ра', 'Ночь',
            'Но-га', 'Ни-ва', 'Ноль', 'У-лит-ка', 'У-гол', 'У-голь', 'У-горь', 'У-дав', 'Уж', 'У-зел', 'У-зор', 'Ук-сус', 'У-каз-ка',
            'Ук-роп', 'У-лей', 'У-ли-ца', 'Ут-ка', 'У-тюг', 'У-хо', 'У-че-ник']
