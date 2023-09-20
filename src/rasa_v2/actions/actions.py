# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ProductInquiryAction(Action):
   def name(self) -> Text:
       return "action_product_inquiry"

   def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
       product_choice = tracker.latest_message['entities'][0]['value'] if tracker.latest_message['entities'] else None

       if product_choice == "phone":
           dispatcher.utter_message(response="utter_buy_phone")
       elif product_choice == "TV":
           dispatcher.utter_message(response="utter_buy_tv")
       elif product_choice == "headphones":
           dispatcher.utter_message(response="utter_buy_headphones")

       return []
   
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
