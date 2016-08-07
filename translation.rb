table "api_tracker" do
	column "api_id", :integer, :references => "apis"
end

table "cocktails" do
	column "id", :key, :as => :integer
	column "api_id", :integer, :references => "apis"
	column "cocktail_name", :string
	column "recipe_processed", :boolean
	column "alcoholic", :boolean
	column "category", :string
	column "drink_thumb", :string
	column "instructions", :text
	column "glass", :string
	column "ingredient_1", :string
	column "ingredient_2", :string
	column "ingredient_3", :string
	column "ingredient_4", :string
	column "ingredient_5", :string
	column "ingredient_6", :string
	column "ingredient_7", :string
	column "ingredient_8", :string
	column "ingredient_9", :string
	column "ingredient_10", :string
	column "ingredient_11", :string
	column "ingredient_12", :string
	column "ingredient_13", :string
	column "ingredient_14", :string
	column "ingredient_15", :string
	column "ingredient_16", :string
	column "ingredient_17", :string
	column "ingredient_18", :string
	column "ingredient_19", :string
	column "ingredient_20", :string
	column "ingredient_measure1", :string
	column "ingredient_measure2", :string
	column "ingredient_measure3", :string
	column "ingredient_measure4", :string
	column "ingredient_measure5", :string
	column "ingredient_measure6", :string
	column "ingredient_measure7", :string
	column "ingredient_measure8", :string
	column "ingredient_measure9", :string
	column "ingredient_measure10", :string
	column "ingredient_measure11", :string
	column "ingredient_measure12", :string
	column "ingredient_measure13", :string
	column "ingredient_measure14", :string
	column "ingredient_measure15", :string
	column "ingredient_measure16", :string
	column "ingredient_measure17", :string
	column "ingredient_measure18", :string
	column "ingredient_measure19", :string
	column "ingredient_measure20", :string
	column "updated_at", :datetime
	column "created_at", :datetime
end

