from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import os.path

weapons = ['CZ75-Auto', 'Desert Eagle', 'Dual Berettas', 'Five-SeveN', 'Glock-18', 'P2000', 'P250', 'R8 Revolver', 'Tec-9', 'USP-S', 'AK-47', 'AUG', 'AWP', 'FAMAS', 'G3SG1', 'Galil AR',
    'M4A1-S', 'M4A4', 'SCAR-20', 'SG 553', 'SSG 08', 'MAC-10', 'MP5-SD', 'MP7', 'MP9', 'PP-Bizon', 'P90', 'UMP-45', 'MAG-7', 'Nova', 'Sawed-Off', 'XM1014', 'M249', 'Negev']
try:
    driver = webdriver.Chrome()

    driver.get('https://csgostash.com/')
    sleep(5)
    driver.find_element(By.XPATH, '/html/body/div[1]/div/div/div/div/div[2]/div[2]/button[2]').click()
    f = open("weapons.json", "a")

    #edit range
    for i in range(1553, 1571):
        driver.get('https://csgostash.com/skin/' + str(i))
        sleep(5)
        try:
            skinName = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[1]/div[1]/h2/a[2]').text

            weaponName = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[1]/div[1]/h2/a[1]').text
            if weaponName not in weapons:
                print('skip knife')
                continue
                
            
            #collection, måste slicas olika beroende på case eller collection
            collection = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[1]/div[2]/div[2]/a/p').text
            collectionSplit = collection.split(' ')
            if collectionSplit[len(collectionSplit) - 1] == 'Collection':
                collectionSplit.pop(0)

            collectionSplit.pop(len(collectionSplit) - 1)
            if 'Weapon' in collectionSplit:
                collectionSplit.remove('Weapon')
            if 'Operation' in collectionSplit:
                collectionSplit.remove('Operation')
            collection = ''
            
            for string in collectionSplit:
                collection += string + ' '
            collection = collection[:-1]

            grade = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[1]/div[1]/a[1]/div/p').text.split(' ')[0]

            minFloat = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[2]/div[3]/div/div/div[1]/div[1]/div[1]/div').text
                    
            maxFloat = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[2]/div[3]/div/div/div[1]/div[2]/div[1]/div').text
                    
            imageURL = driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div[2]/div/div[1]/div[1]/a[2]/img').get_attribute("src")
            
            #collection path
            collectionURL = '/collections/'
            png = collection.lower().replace(' ', '_') + '.png'
            webp = collection.lower().replace(' ', '_') + '.webp'
            if os.path.isfile('./collections/' + png):
                collectionURL += png
            else:
                collectionURL += webp
            

            tradeUpInput = True
            if grade == 'Covert':
                tradeUpInput = False
            
            #tradup
            result = {
                "collection": collection,
                "weaponName": weaponName,
                "skinName": skinName,
                "quality": grade,
                "tradupInput": tradeUpInput,
                "floatMin": minFloat,
                "floatMax": maxFloat,
                "imageURL": imageURL,
                "collectionURL": collectionURL
            }
            print(result)
            f.writelines(str(result))
            f.write(',')
            

        except Exception as e:
            print(e)
except:
    f.close()           